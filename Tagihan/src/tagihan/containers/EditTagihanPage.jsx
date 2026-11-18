
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditTagihan from '../components/FormEditTagihan'
import getDataTagihan from '../services/getDataTagihan'

const EditTagihanPage = props => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState({
	editTagihan: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Tagihan Page")
  }, []);


const [dataTagihan, setDataTagihan] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editTagihan: true}))
      const { data: dataTagihanResponse } = await getDataTagihan({ id  })

	  setDataTagihan(dataTagihanResponse.data)
	  setIsLoading(prev => ({...prev, editTagihan: false}))
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
		singularName={"Tagihan"}
		isLoading={isLoading.editTagihan}
	>
		{dataTagihan ? 
		(<>
		 <FormEditTagihan
			{...{ 
				dataTagihan
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditTagihanPage

