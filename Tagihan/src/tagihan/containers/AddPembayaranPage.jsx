
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormAddPembayaran from '../components/FormAddPembayaran'

const AddPembayaranPage = props => {
  const [isLoading, setIsLoading] = useState({
	addPembayaran: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Pembayaran Page")
  }, []);


const [dataBinding, setDataBinding] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addPembayaran: true}))
      const { data: dataBindingResponse } = await getDataBinding({  })

	  setDataBinding(dataBindingResponse.data)
	  setIsLoading(prev => ({...prev, addPembayaran: false}))
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
		isLoading={isLoading.addPembayaran}
	>
		{dataBinding ? 
		(<>
		 <FormAddPembayaran
			{...{ 
				dataBinding
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddPembayaranPage

