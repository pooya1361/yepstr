import React from 'react';
import CategoryItem from './categoryItem';
import Categories from '../data/Category.json';


const styles = {
    menu: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
        maxWidth: '100%',
        flexWrap: 'wrap',
    },
};

function loadCategories() {
    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function(a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    let result = [];
    const categories = Categories['results'].sort(dynamicSort("order"));
    categories.map((categories) => {
            result.push( < CategoryItem key = { categories['order'] }
                name = { categories['nameKey'] }
                id = { categories['objectId'] }
                icon = { categories['icon'] }
                />)
            })

        return ( <
            div style = { styles.menu } > { result } <
            /div>
        );
    };

    class CategoryList extends React.Component {
        render() {
            return ( <
                div > { loadCategories() } <
                /div>
            );
        }
    }

    export default CategoryList;