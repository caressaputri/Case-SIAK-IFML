
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
import savePembayaran from '../services/savePembayaran'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddPembayaran = ({ 
	dataBinding
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const bayar = (data) => {
    const cleanData = cleanFormData(data)
    savePembayaran({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	notifySuccess(`Save Pembayaran berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Pembayaran" 
		  onSubmit={handleSubmit(bayar)}
	
	    vas={[
	      <VisualizationAttr
	        label="No"
	        content={dataBinding?.id}
	        
	      />
	,
	      <VisualizationAttr
	  label="paymentId"
	  content={dataBinding?.paymentId}
	  
	/>
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="amount"
	        name="amount"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Amount"
	          placeholder="Masukkan amount"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="tagihanimpl"
	        name="tagihanimpl"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Tagihan"
	          placeholder="Masukkan tagihan"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
	
	      <Controller
	        key=""
	        name=""
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Metode Pembayaran"
	          options={dataBinding}
	          optionLabel="metodePembayaran"
	          placeholder="Masukkan metode pembayaran"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_nPfZANzGEfGG8dLC5rTvHA" key="Bayar" type="submit" variant="primary">Bayar</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddPembayaran
