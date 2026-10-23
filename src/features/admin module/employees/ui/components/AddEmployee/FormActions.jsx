import React from "react";
import Button from "../Button";

const FormActions = ({ onCancel, isPending = false }) => {
  return (
    <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
      <Button
        variant="secondary"
        size="md"
        onClick={onCancel}
      >
        Cancel
      </Button>

      <Button
        variant="primary"
        size="md"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Creating..." : "Create Employee"}
      </Button>
    </div>
  );
};

export default FormActions;