
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditIRS from '../components/FormEditIRS'
import getDataIRS from '../services/getDataIRS'

const EditIRSPage = props => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState({
	editIRS: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit IRS Page")
  }, []);


const [dataIRS, setDataIRS] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editIRS: true}))
      const { data: dataIRSResponse } = await getDataIRS({ id  })

	  setDataIRS(dataIRSResponse.data)
	  setIsLoading(prev => ({...prev, editIRS: false}))
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
		singularName={"IRS"}
		isLoading={isLoading.editIRS}
	>
		{dataIRS ? 
		(<>
		 <FormEditIRS
			{...{ 
				dataIRS
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditIRSPage

