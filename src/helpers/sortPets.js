const pets = [];
const sortValue = '';

const sortPets = () => {
    if (sortValue === 'Name') {
        return [...pets].sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        });
    } else if (sortValue === 'Breed') {
        return [...pets].sort((a, b) => {
            if (a.breed > b.breed) {
                return 1;
            } else if (a.breed < b.breed) {
                return -1;
            } else {
                return 0;
            }
        });
    } else {
        return pets;
    }
};

sortPets();
