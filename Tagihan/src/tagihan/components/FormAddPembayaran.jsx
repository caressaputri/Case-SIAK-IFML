
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
      navigate(`/tagihan`)
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
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="paymentId"
	        name="paymentId"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Nomor Referensi"
	          placeholder="Masukkan nomor referensi"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="amount"
	        name="amount"
	        control={control}
	        rules={{ required: "Harap masukkan amount" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Amount"
	          placeholder="Masukkan amount"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="metodePembayaran"
	        name="metodePembayaran"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Metode Pembayaran"
	          placeholder="Masukkan metode pembayaran"
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
	        rules={{ required: "Harap masukkan tagihan" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Tagihan"
	          placeholder="Masukkan tagihan"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_nPfZANzGEfGG8dLC5rTvHA" key="Bayar" type="submit" variant="primary">Bayar</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddPembayaran
