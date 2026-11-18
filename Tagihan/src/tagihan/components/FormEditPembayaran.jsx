
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
import updatePembayaran from '../services/updatePembayaran'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditPembayaran = ({ 
	dataPembayaran
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataPembayaran })
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updatePembayaran({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/pembayaran`)
  	notifySuccess(`Update Pembayaran berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Pembayaran" 
		  onSubmit={handleSubmit(simpan)}
	
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
	          defaultValue={dataPembayaran.paymentId}
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
	          defaultValue={dataPembayaran.amount}
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="status"
	        name="status"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Status"
	          placeholder="Masukkan status"
	          defaultValue={dataPembayaran.status}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
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
	          defaultValue={dataPembayaran.metodePembayaran}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="sumberStatus"
	        name="sumberStatus"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Sumber Status"
	          placeholder="Masukkan sumber status"
	          defaultValue={dataPembayaran.sumberStatus}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="xEvUpdPemb" key="Simpan" type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditPembayaran
