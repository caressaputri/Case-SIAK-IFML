
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
import updatePengisianRencanaStudi from '../services/updatePengisianRencanaStudi'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditIRS = ({ 
	dataIRS
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataIRS })
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updatePengisianRencanaStudi({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/irs/ringkasan`)
  	notifySuccess(`Update Pengisian Rencana Studi berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit IRS" 
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
	          defaultValue={dataIRS.status}
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
	          defaultValue={dataIRS.totalSks}
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="alasanPembatalan"
	        name="alasanPembatalan"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Alasan Pembatalan"
	          placeholder="Masukkan alasan pembatalan"
	          defaultValue={dataIRS.alasanPembatalan}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="yEvUpdIRS" key="Simpan" type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditIRS
