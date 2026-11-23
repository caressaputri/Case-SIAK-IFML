
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
import saveKelasMahasiswa from '../services/saveKelasMahasiswa'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormIsiIRS = ({ 
	pilihanKelas
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    saveKelasMahasiswa({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/irs/ringkasan`)
  	notifySuccess(`Save Kelas Mahasiswa berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Isi IRS" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="npm"
	        name="npm"
	        control={control}
	        rules={{ required: "Harap masukkan npm" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="NPM"
	          placeholder="Masukkan npm"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
	
	      <Controller
	        key="kelasimpl"
	        name="kelasimpl"
	        control={control}
	        rules={{ required: "Harap pilih kelas" }} 
	        render={({ field, fieldState }) => (
	        <MultiSelectionField
	          
	          label="Kelas"
	          options={pilihanKelas}
	          optionKey="kelasimpl"
	          optionLabel="nama"
	          placeholder="Masukkan kelas"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_493BwOG0EfGIXdw6TcAYcQ" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormIsiIRS
