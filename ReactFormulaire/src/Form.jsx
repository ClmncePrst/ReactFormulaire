import { useState } from 'react'

const Formulaire = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        password: '',
    });
    // useState spécifique pour définir une limite d'âge
    const [ageLimit, setAgeLimit] = useState('');
    // gestion de changement d'âge   
    const handleAgeChange = (event) => {
        let age = parseInt(event.target.value);
        //mise à jour des données avec l'âge entré dans le formulaire
        setFormData({ ...formData, age });
        //si l'âge est inférieur à 18 ans, afficher un message d'erreur
        if (age < 18) {
            setAgeLimit('Vous devez avoir plus de 18 ans.')
        }
    };
    // gestion de changement des autres champs du formulaire
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // mise à jour des données du formulaire avec les nouvelles valeurs saisies
        setFormData({ ...formData, [name]: value });
    }
    // gestion de la soumission du formulaire avec empêcher d'utiliser le comportement par défaut de soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();
        // vérification des erruers de validation, notamment de la limite d'âge et enregistrer les informations si il n'y a pas d'erreur
        if (ageLimit) {
            console.log("Formulaire non envoyé en raison d'erreurs");
        } else {
            console.log("Données du formulaires envoyées:", formData);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Prénom:
                <input type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
            </label>

            <label>
                Nom:
                <input type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
            </label>

            <label>
                Âge:
                <input
                    type='number'
                    name='age'
                    value={formData.age}
                    onChange={handleAgeChange}
                />
                <div> {ageLimit}</div>
            </label>

            <label>
                Adresse Email:
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </label>

            <label>
                Mot de passe:
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </label>
            <button type='submit'>S'inscrire</button>
        </form>
    )
};

export default Formulaire