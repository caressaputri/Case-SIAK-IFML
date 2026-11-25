
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormIsiIRS from '../components/FormIsiIRS'
import getPilihanKelas from '../services/getPilihanKelas'
import DataMahasiswa from '../components/DataMahasiswa'
import getDataMahasiswa from '../services/getDataMahasiswa'
import { notifyError } from '@/commons/utils/toaster'

const IsiIRSPage = props => {
  const [isLoading, setIsLoading] = useState({
	isiIRS: false,
	dataMahasiswa: false,

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
const [dataMahasiswa, setDataMahasiswa] = useState()
useEffect(() => { if (dataMahasiswa?.bolehIsiIrs === false) notifyError(dataMahasiswa.alasanIrs) }, [dataMahasiswa])
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, dataMahasiswa: true}))
				const { data: dataMahasiswa } = await getDataMahasiswa({  })
				setDataMahasiswa(dataMahasiswa.data)
			} finally {
				setIsLoading(prev => ({...prev, dataMahasiswa: false}))
			}
		}
		fetchData()
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
		{dataMahasiswa?.bolehIsiIrs === false ? (<div role="alert" className="alert alert-warning">{dataMahasiswa.alasanIrs}</div>) : pilihanKelas && dataMahasiswa ? 
		(<>
		 <FormIsiIRS
			{...{ 
				pilihanKelas
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>
<Layouts.DetailContainerLayout
	title={"Data Mahasiswa"}
	singularName={"Mahasiswa"}
	items={{...dataMahasiswa}}
	isLoading={isLoading.dataMahasiswa}
	isCorrelatedWithAnotherComponent={false}
>
	<DataMahasiswa {...{ data : { ...dataMahasiswa }}} />
	<p className="text-sm mt-2">Status UKT: {dataMahasiswa?.statusUkt ?? "-"} | Dosen PA: {dataMahasiswa?.dosenPa ?? "-"}</p>
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default IsiIRSPage

