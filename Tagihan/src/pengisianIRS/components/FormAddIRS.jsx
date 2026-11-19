
import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  InputField,
  SelectionField,
  MultiSelectionField,
  VisualizationAttr,
  Spinner,
  Modal,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import savePengisianRencanaStudi from '../services/savePengisianRencanaStudi'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddIRS = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    savePengisianRencanaStudi({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/irs/ringkasan`)
  	notifySuccess(`Save Pengisian Rencana Studi berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add IRS" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="totalSks"
	        name="totalSks"
	        control={control}
	        rules={{ required: "Harap masukkan total sks" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Total SKS"
	          placeholder="Masukkan total sks"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="mulai"
	        name="mulai"
	        control={control}
	        rules={{ required: "Harap masukkan mulai" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Mulai"
	          placeholder="Masukkan mulai"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="akhir"
	        name="akhir"
	        control={control}
	        rules={{ required: "Harap masukkan akhir" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Akhir"
	          placeholder="Masukkan akhir"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="mahasiswaimpl"
	        name="mahasiswaimpl"
	        control={control}
	        rules={{ required: "Harap masukkan mahasiswa" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Mahasiswa"
	          placeholder="Masukkan mahasiswa"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="semesterimpl"
	        name="semesterimpl"
	        control={control}
	        rules={{ required: "Harap masukkan semester" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Semester"
	          placeholder="Masukkan semester"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_493BwOG0EfGIXdw6TcAYcQ" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddIRS
