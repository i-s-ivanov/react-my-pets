
import { useState, useEffect} from 'react';

import * as petsService from '../../services/petsService';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Pet from '../Pet/Pet';

const Categories = ({
    match,
}) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petsService.getAll(match.params.category).then(res => setPets(res));
    }, [match]);

    return (
        <section className="dashboard">
            <h1>Dashboard</h1>

            <CategoryNavigation />

            <ul className="other-pets-list">
                {pets.map(x => <Pet key={x.id} pet={x} />)}
                
            </ul>
        </section>
    );
};


export default Categories;