
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

const FormAmbilKelas = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
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
		  title="Ambil Kelas" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="kelasimpl"
	        name="kelasimpl"
	        control={control}
	        rules={{ required: "Harap masukkan kelas" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Kelas"
	          placeholder="Masukkan kelas"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="pengisianrencanastudiimpl"
	        name="pengisianrencanastudiimpl"
	        control={control}
	        rules={{ required: "Harap masukkan irs" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="IRS"
	          placeholder="Masukkan irs"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="tanggalPengisian"
	        name="tanggalPengisian"
	        control={control}
	        rules={{ required: "Harap masukkan tanggal pengisian" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Tanggal Pengisian"
	          placeholder="Masukkan tanggal pengisian"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_ks9NHpozEfGY1t1YRCeQ79" key="Simpan" type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAmbilKelas
