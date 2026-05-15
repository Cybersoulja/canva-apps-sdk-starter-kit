import { Button, Link, Rows, Text, Title, OpenInNewIcon } from "@canva/app-ui-kit";
import { requestOpenExternalUrl } from "@canva/platform";
import { useState } from "react";
import * as styles from "styles/components.css";

const DOCS_URL =
  "https://www.canva.dev/docs/apps/api/platform-request-open-external-url/";
const GUIDELINES_URL =
  "https://www.canva.dev/docs/apps/design-guidelines/external-links/";
const ACCEPTING_PAYMENTS_URL =
  "https://www.canva.dev/docs/apps/accepting-payments/";

export const App = () => {
  const [openingGuidelines, setOpeningGuidelines] = useState(false);
  const [openingPayments, setOpeningPayments] = useState(false);

  const openExternalUrl = async (url: string, setOpening?: (v: boolean) => void) => {
    try {
      setOpening?.(true);
      const response = await requestOpenExternalUrl({
        url,
      });

      if (response.status === "aborted") {
        // user decided not to navigate to the link
      }
    } finally {
      setOpening?.(false);
    }
  };

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="1u">
        <Text>
          To learn more about how to open external URLs in your app, head over
          to the{" "}
          <Link
            href={DOCS_URL}
            requestOpenExternalUrl={() => openExternalUrl(DOCS_URL)}
            title="Canva Apps SDK docs"
          >
            docs
          </Link>
          .
        </Text>
        <Title>Guidelines:</Title>
        <Text>Be sure to checkout the below guidelines</Text>
        <Button
          variant="secondary"
          onClick={() => openExternalUrl(GUIDELINES_URL, setOpeningGuidelines)}
          icon={OpenInNewIcon}
          iconPosition="end"
          loading={openingGuidelines}
        >
          Design Guidelines
        </Button>
        <Button
          variant="secondary"
          onClick={() => openExternalUrl(ACCEPTING_PAYMENTS_URL, setOpeningPayments)}
          icon={OpenInNewIcon}
          iconPosition="end"
          loading={openingPayments}
        >
          Payment links
        </Button>
      </Rows>
    </div>
  );
};
