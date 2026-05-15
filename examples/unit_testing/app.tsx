import {
  Button,
  Column,
  Columns,
  Rows,
  Swatch,
  Text,
  Title,
  OpenInNewIcon,
} from "@canva/app-ui-kit";
import * as styles from "styles/components.css";
import { requestOpenExternalUrl } from "@canva/platform";
import type { Anchor } from "@canva/asset";
import { openColorSelector } from "@canva/asset";
import { useState } from "react";
import { useFeatureSupport } from "utils/use_feature_support";
import { addPage } from "@canva/design";
import { CanvaError } from "@canva/error";

export const DOCS_URL = "https://www.canva.dev/docs/apps/";
export const API_URL = `${DOCS_URL}api/v2/platform-request-open-external-url/`;
export const QUOTA_ERROR =
  "Sorry, you cannot add any more pages. Please remove an existing page and try again.";

export const App = () => {
  const [error, setError] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>(undefined);
  const [openingDocs, setOpeningDocs] = useState(false);
  const [openingApi, setOpeningApi] = useState(false);
  const [addingPage, setAddingPage] = useState(false);

  const openExternalUrl = async (url: string, setOpening: (v: boolean) => void) => {
    try {
      setOpening(true);
      await requestOpenExternalUrl({ url });
    } finally {
      setOpening(false);
    }
  };

  const handleSwatchClick = async (boundingRect: Anchor) => {
    const closeFn = await openColorSelector(boundingRect, {
      onColorSelect: (e) => {
        if (e.selection.type === "solid") {
          setColor(e.selection.hexString);
        }
        closeFn();
      },
      scopes: ["solid"],
    });
  };

  const handleAddPage = async () => {
    try {
      setAddingPage(true);
      await addPage({
        title: "New Page Added By Button",
        background: {
          color: color || "#acbdef",
        },
      });
    } catch (e) {
      if (e instanceof CanvaError) {
        switch (e.code) {
          case "quota_exceeded":
            setError(QUOTA_ERROR);
            break;
          // TODO: handle other errors uniquely if required
          default:
            setError(e.message);
            break;
        }
      }
    } finally {
      setAddingPage(false);
    }
  };

  const isSupported = useFeatureSupport();
  const canAddPage = isSupported(addPage);

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="1u">
        {error && <Text tone="critical">{error}</Text>}
        {/* === This swatch is used in the unit test to demonstrate listening for calls to a Canva Apps API */}
        <div id="color-selector">
          <Title>Color Selector</Title>
          <Swatch
            fill={[color]}
            onClick={(e) =>
              handleSwatchClick(e.currentTarget.getBoundingClientRect())
            }
          />
        </div>
        {/* === These buttons are used in the unit test to demonstrate checking for parameters passed to Canva Apps APIs === */}
        <Title>Open External Link</Title>
        <Columns spacing="1u">
          <Column>
            <Button
              stretch
              variant="secondary"
              onClick={() => openExternalUrl(DOCS_URL, setOpeningDocs)}
              icon={OpenInNewIcon}
              iconPosition="end"
              loading={openingDocs}
            >
              Apps SDK
            </Button>
          </Column>
          <Column>
            <Button
              variant="secondary"
              stretch
              onClick={() => openExternalUrl(API_URL, setOpeningApi)}
              icon={OpenInNewIcon}
              iconPosition="end"
              loading={openingApi}
            >
              API Reference
            </Button>
          </Column>
        </Columns>
        {/* === Displaying this section is contingent on the feature being supported - this can be mocked in a unit test to check both paths */}
        <Title>Add Page</Title>
        {canAddPage ? (
          <Button variant="secondary" onClick={() => handleAddPage()} loading={addingPage}>
            Add Page
          </Button>
        ) : (
          <Text>
            Adding pages is not supported in this design. Please try this
            example in a different design.
          </Text>
        )}
      </Rows>
    </div>
  );
};
