import PropTypes from "prop-types";
import { Button } from "../ui/button";
import FormControls from "./form-controls";

const CommonForm = ({
  handleSubmit,
  buttonText,
  formControls,
  formData,
  setFormData,
  isButtonDisabled = false,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* Render Form Controls Here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button className="mt-5 w-full" disabled={isButtonDisabled} type="submit">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

// Prop Types
CommonForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  formControls: PropTypes.array.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool,
};

export default CommonForm;
