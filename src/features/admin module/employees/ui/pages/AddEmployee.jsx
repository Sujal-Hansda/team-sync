
import React, { useState } from "react";
import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import AddEmployeeHeader from "../components/AddEmployee/AddEmployeeHeader";
import PersonalInfoForm from "../components/AddEmployee/PersonalInfoForm";
import FormActions from "../components/AddEmployee/FormActions";
import EmploymentDetailsForm from "../components/AddEmployee/EmploymentDetailsForm";
import { createEmployee } from "../../api/employeeApi";

const AddEmployee = () => {
  
    // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      department: "",
      role: "",
      joiningDate: "",
      status: "active",
      avatar: "",
      password: "12345678",
    },
  });

  // SUBMIT
  const onSubmit = async (data) => {
    // console.log("FORM DATA =>", data);
    try {
      let res = await createEmployee(data);
      console.log(res, "in ui");
      alert("employee created");
      reset();
    } catch (error) {
      console.log("error in api", error);
    }
  };


  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <AddEmployeeHeader />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <PersonalInfoForm
            register={register}
            errors={errors}
            setValue={setValue}
            watch={watch}
          />
  

          <EmploymentDetailsForm register={register} errors={errors}
          />

          <FormActions

          />
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;

 