// small messaging querying system with json db
// like graphql typeahead suggestions



// search
// frontend search

let query = {
    // ------> when colon is typed get person suggestions
    // what 
    person: {
        // ---> when curly bracket typed get person properties
        firstName: {
            value: 'jameel'
            // ----> can stop here and will search through all records where person.firstName === 'jameel'
        },
        lastName:{
            value: 'matin'
        }
    },
    // ----> will return a list of ids with which to search through

    // filter
    where: {
        // ----> fields connected to person
        field: 'messaage',
        message: {
            to: '',
            text:'sabio',
            date:'',
        },
        
    }
    // fields to return
}


/********************* Rules ************************************ */
//// build out tree
// if size < 1000 mb give all data and filter/ search data on frontend
// if size < 1000
// backend search

// query ---> return things queryAble
        // person
        // messages
        // time

    // select person ---> 
    // types : return top 10 people as suggestions
    // set person Index as primary
    // types 'f' get person properties where f is the first letter
    // selects firstname --->
    // types : return top 10 firstName as suggestions
    // types { ---> get firstName properties if any
    // if no firstname properties 'value' field is populated
    // fill in value with 'jamee' keeps narrowing in person with firstname starts with jamee
