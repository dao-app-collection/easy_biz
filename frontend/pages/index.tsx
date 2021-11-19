import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/Table/Table'
import Container from '../components/layout/Container'
import { fakeTable } from '../interfaces/Table'
import QtyList from '../components/QtyList/QtyList'
import { fakeWorkChunk } from '../interfaces/WorkChunk'
import { arrOf } from '../utils/arrays'
import { useState, useEffect } from 'react'
import { apiURL } from '../utils/config'
import { Client, Deadline, Project } from '../interfaces/Data';
import DashList from '../components/dashboard/DashList';

interface DashData {
  clients: Client[],
  deadlines: Deadline[],
  projects: Project[]
}

let emptyData: DashData = {
  clients: [],
  deadlines: [],
  projects: []
}

const Home: NextPage = () => {
  const [data, setData] = useState(emptyData);
  const [activeClient, setActiveClient] = useState<Client>();
  const [activeProject, setActiveProject] = useState<Project>();
  const [activeDeadline, setActiveDeadline] = useState<Deadline>();

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    const res = await fetch(apiURL);
    const data = await res.json();
    setData(data);
    console.log(data);
  }
  
  return (
  <>
    <Container columns={3}>
      {data.clients && 
        <DashList 
          active={activeClient} 
          setActive={setActiveClient} 
          title={"Clients"} 
          data={data.clients} />}
      {data.projects && 
        <DashList 
          activeParent={activeClient} 
          active={activeProject}
          setActive={setActiveProject}
          title={"Projects"} 
          data={data.projects} />}
      {data.deadlines && 
        <DashList 
          activeParent={activeProject}
          active={activeDeadline}
          setActive={setActiveDeadline}
          title={"Deadlines"} 
          data={data.deadlines} />}
    </Container>
    <Container>
      <Table data={fakeTable("Test Table", 10, 6 )}/>
    </Container>
    <Container>
      <div style={{width: "400px"}}>
        <Table data={fakeTable("Narrow Table", 8, 2)} />
      </div>
    </Container>
    <Container>
      <QtyList data={arrOf(10, fakeWorkChunk)} />
    </Container>
  </>
  )
}

export default Home
