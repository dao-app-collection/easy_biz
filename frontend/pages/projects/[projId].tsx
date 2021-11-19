import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { apiURL } from '../../utils/config';

const Project: NextPage = () => {
    const router = useRouter();
    const { projId } = router.query;
    const [ project , setProject ] = useState([])

    useEffect(() => {
        if (!router.isReady) return;
        getProject();
    }, [router.isReady]);

    const getProject = async () => {
        const res = await fetch(`${apiURL}/project/${projId}`);
        const project = await res.json();
        console.log(`${apiURL}/project/${projId}`);
        console.log(project);
        setProject(project);
    }

    return (
        <div>{projId}</div>
    )
}

export default Project;