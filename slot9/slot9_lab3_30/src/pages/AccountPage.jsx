// src/pages/AccountPage.jsx
import React, { useState } from "react";
import { Container, Card, ProgressBar, Button } from "react-bootstrap";
import { BsPersonCircle, BsLock, BsGeoAlt } from "react-icons/bs";
import AboutForm from "../components/Account/AboutForm";
import AccountForm from "../components/Account/AccountForm";
import AddressForm from "../components/Account/AddressForm";

const AccountPage = () => {
  const [step, setStep] = useState(1);

  const progress = step === 1 ? 33 : step === 2 ? 67 : 100;

  return (
    <Container className="my-4">
      <Card className="shadow">
        <Card.Body>
          <h4 className="text-center mb-4 fw-bold">Build Your Profile</h4>
          <ProgressBar now={progress} label={`${progress}%`} className="mb-4" />

          <div className="mb-3 d-flex justify-content-center gap-3">
            <Button
              variant={step === 1 ? "primary" : "outline-primary"}
              onClick={() => setStep(1)}
            >
              <BsPersonCircle /> About
            </Button>
            <Button
              variant={step === 2 ? "primary" : "outline-primary"}
              onClick={() => setStep(2)}
            >
              <BsLock /> Account
            </Button>
            <Button
              variant={step === 3 ? "primary" : "outline-primary"}
              onClick={() => setStep(3)}
            >
              <BsGeoAlt /> Address
            </Button>
          </div>

          {step === 1 && (
            <>
              <AboutForm />
              <div className="d-flex justify-content-end mt-3">
                <Button onClick={() => setStep(2)}>Next</Button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <AccountForm />
              <div className="d-flex justify-content-between mt-3">
                <Button variant="secondary" onClick={() => setStep(1)}>
                  Previous
                </Button>
                <Button onClick={() => setStep(3)}>Next</Button>
              </div>
            </>
          )}

          {step === 3 && (
            <AddressForm
              onPrevious={() => setStep(2)}
              onFinish={() => alert("🎉 Profile built successfully!")}
            />
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AccountPage;
