
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
import updateTagihan from '../services/updateTagihan'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditTagihan = ({ 
	dataTagihan
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataTagihan })
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateTagihan({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/tagihan`)
  	notifySuccess(`Update Tagihan berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Tagihan" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="jumlahTagihan"
	        name="jumlahTagihan"
	        control={control}
	        rules={{ required: "Harap masukkan jumlah tagihan" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Jumlah Tagihan"
	          placeholder="Masukkan jumlah tagihan"
	          defaultValue={dataTagihan.jumlahTagihan}
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="statusPembayaran"
	        name="statusPembayaran"
	        control={control}
	        rules={{ required: "Harap masukkan status pembayaran" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Status Pembayaran"
	          placeholder="Masukkan status pembayaran"
	          defaultValue={dataTagihan.statusPembayaran}
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="golonganUkt"
	        name="golonganUkt"
	        control={control}
	        rules={{ required: "Harap masukkan golongan ukt" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Golongan UKT"
	          placeholder="Masukkan golongan ukt"
	          defaultValue={dataTagihan.golonganUkt}
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="skemaPembayaran"
	        name="skemaPembayaran"
	        control={control}
	        rules={{ required: "Harap masukkan skema pembayaran" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Skema Pembayaran"
	          placeholder="Masukkan skema pembayaran"
	          defaultValue={dataTagihan.skemaPembayaran}
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="jumlahTerbayar"
	        name="jumlahTerbayar"
	        control={control}
	        rules={{ required: "Harap masukkan jumlah terbayar" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Jumlah Terbayar"
	          placeholder="Masukkan jumlah terbayar"
	          defaultValue={dataTagihan.jumlahTerbayar}
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="xEvUpdTag" key="Simpan" type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditTagihan
