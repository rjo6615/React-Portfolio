import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import ReactPDF from '@react-pdf/renderer';


const resumeLink = "../Images/resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <Document file="./resume.pdf" className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;