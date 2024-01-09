import { useState } from "react";
import Table from "./components/Table";
import Modal from "./components/Modal/Modal";
import Select from "./components/Select/Select";

import "./style.css"

export default function App() {
    const [apiData, setApiData] = useState()

    const [showModal, setShowModal] = useState<boolean>(false)

    const [info, setInfo] = useState<any>("hola")

    const [isSelected, setIsSelected] = useState(false)

    function setModalInfo(data: any) {
        if (data) {
            setShowModal(true)
            setInfo(data)
        }
    }

    async function changeData(url: string) {
        const dataPromise = (await fetch(url)).json()
        const data = await dataPromise
        setApiData(data)
    }

    return (
        <main className="main">
            <Select changeData={changeData} setIsSelected={setIsSelected}></Select>
            {isSelected && <Table setModalInfo={setModalInfo} data={apiData}></Table>}
            {/* <Table setModalInfo={setModalInfo} data={apiData}></Table> */}
            {showModal && <Modal setShowModal={setShowModal}
                modalInfo={info} />}
        </main>
    );
}
