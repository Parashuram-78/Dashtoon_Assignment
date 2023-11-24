import { Box, Container, Button } from "@mui/joy";
import ComicGrid from "./components/ComicGrid";
import { ContentPaste } from "@mui/icons-material";
import { IconButton } from "@mui/joy";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import Dialog from "./components/Dialog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Create() {

  // Dialog state
  const [open, setOpen] = useState(false);
  const [panelNumber, setPanelNumber] = useState(0);

  // ComicStrip ref for image capture
  const comicStripRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const [imageBlob, setImageBlob] = useState("");
  const captureImage = async () => {
    if (comicStripRef.current) {
      const canvas = await html2canvas(comicStripRef.current, {
        scale: 2,
      });
      const dataURL = canvas.toDataURL("image/png");
      canvas.toBlob((blob) => setImageBlob(blob));
      const image = new Image();
      image.src = dataURL;
      setImageSrc(dataURL);
    }
  };

  const handleCopyClick = () => {
    captureImage().then(() => {
      navigator.clipboard.write([
        new ClipboardItem({
          [imageBlob.type]: imageBlob,
        }),
      ]);
    });
  };

  const handleDownloadClick = () => {
    captureImage().then(() => {
      const link = document.createElement("a");
      link.href = imageSrc;
      link.download = "comic.png";
      link.click();
    });
  };
  return (
    <Box
      sx={{
        scrollSnapType: "y mandatory",
        "& > div": {
          scrollSnapAlign: "start",
        },
      }}
    >
      <Box
        sx={{
          position: "",
          // bottom: 16,
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        {/* <Button size="lg" color="neutral" onClick={shareHandler}>
          Share
        </Button> */}
        <Button size="lg" color="success" onClick={handleDownloadClick}>
          Download
        </Button>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              right: -24,
              top: -18,
            }}
            onClick={handleCopyClick}
          >
            <ContentPaste />
          </IconButton>
        </Box>
      </Box>
      {/* </Link> */}

      <Container
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          padding: 3,
          alignItems: "center",
        }}
      >
        <ComicGrid

          comicGridRef={comicStripRef}
          setOpen={setOpen}
          setPanelNumber={setPanelNumber}
        />
      </Container>



      <Dialog open={open} setOpen={setOpen} panelNumber={panelNumber} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
}
