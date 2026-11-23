
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormIsiIRS from '../components/FormIsiIRS'
import getPilihanKelas from '../services/getPilihanKelas'

const IsiIRSPage = props => {
  const [isLoading, setIsLoading] = useState({
	isiIRS: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Isi IRS Page")
  }, []);


const [pilihanKelas, setPilihanKelas] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, isiIRS: true}))
      const { data: pilihanKelasResponse } = await getPilihanKelas({  })

	  setPilihanKelas(pilihanKelasResponse.data)
	  setIsLoading(prev => ({...prev, isiIRS: false}))
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
		isLoading={isLoading.isiIRS}
	>
		{pilihanKelas ? 
		(<>
		 <FormIsiIRS
			{...{ 
				pilihanKelas
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default IsiIRSPage

