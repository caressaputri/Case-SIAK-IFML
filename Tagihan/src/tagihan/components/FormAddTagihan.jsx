
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
import saveTagihan from '../services/saveTagihan'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddTagihan = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    saveTagihan({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/tagihan`)
  	notifySuccess(`Save Tagihan berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Tagihan" 
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
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="jatuhTempo"
	        name="jatuhTempo"
	        control={control}
	        rules={{ required: "Harap masukkan jatuh tempo (yyyy-mm-dd)" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Jatuh Tempo (YYYY-MM-DD)"
	          placeholder="Masukkan jatuh tempo (yyyy-mm-dd)"
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
		    <Button id="xEvSimpanTag" key="Simpan" type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddTagihan
