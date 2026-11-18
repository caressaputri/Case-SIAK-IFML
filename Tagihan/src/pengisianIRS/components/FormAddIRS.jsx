
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
  
  const simpan = (data) => {
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
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="status"
	        name="status"
	        control={control}
	        rules={{ required: "Harap masukkan status" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Status"
	          placeholder="Masukkan status"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
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
	        rules={{ required: "Harap masukkan mulai (yyyy-mm-dd)" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Mulai (YYYY-MM-DD)"
	          placeholder="Masukkan mulai (yyyy-mm-dd)"
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
	        rules={{ required: "Harap masukkan akhir (yyyy-mm-dd)" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Akhir (YYYY-MM-DD)"
	          placeholder="Masukkan akhir (yyyy-mm-dd)"
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
	        rules={{ required: "Harap masukkan mahasiswa (id)" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Mahasiswa (id)"
	          placeholder="Masukkan mahasiswa (id)"
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
	        rules={{ required: "Harap masukkan semester (id)" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Semester (id)"
	          placeholder="Masukkan semester (id)"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_493BwOG0EfGIXdw6TcAYcQ" key="Simpan" type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddIRS
