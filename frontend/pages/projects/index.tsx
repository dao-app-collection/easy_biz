import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { apiURL } from '../../utils/config';

const Projects: NextPage = () => {
    const router = useRouter();
    const [ projects , setProjects ] = useState([])

    useEffect(() => {
        getProjects();
    }, [router.isReady]);

    const getProjects = async () => {
        const res = await fetch(`${apiURL}/projects`);
        const projects = await res.json();
        console.log(projects);
        setProjects(projects);
    }

    const mapProjects = () => {
        return projects.map( project => {
            return (
                <div>{project.title}</div>
            )
        })
    }

    return (
        <div>{mapProjects()}</div>
    )
}

export default Projects;