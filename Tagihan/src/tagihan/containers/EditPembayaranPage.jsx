
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditPembayaran from '../components/FormEditPembayaran'
import getDataPembayaran from '../services/getDataPembayaran'

const EditPembayaranPage = props => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState({
	editPembayaran: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Pembayaran Page")
  }, []);


const [dataPembayaran, setDataPembayaran] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editPembayaran: true}))
      const { data: dataPembayaranResponse } = await getDataPembayaran({ id  })

	  setDataPembayaran(dataPembayaranResponse.data)
	  setIsLoading(prev => ({...prev, editPembayaran: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Pembayaran"}
		isLoading={isLoading.editPembayaran}
	>
		{dataPembayaran ? 
		(<>
		 <FormEditPembayaran
			{...{ 
				dataPembayaran
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditPembayaranPage

