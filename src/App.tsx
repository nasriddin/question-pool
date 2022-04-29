import React from 'react';
import CategoryCard from "./components/CategoryCard";
import Category from "./models/category";
import LoadingText from "./components/LoadingText";
import Question from "./components/Questions/Question";
import CategorySelect from "./components/CategorySelect/CategorySelect";


function App() {
  let category: Category = {
    id: 1,
    title: 'Category Name',
    about: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richar',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw1kjASqc_7TN1Bo-p360rV_&ust=1651210391295000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDcw5mEtvcCFQAAAAAdAAAAABAD',
  }


  return (
    <>
      <div style={{'width': '300px'}}>
        <CategoryCard  category={category}/>
      </div>
      <div >
        <LoadingText  children={"Test is starting....."}/>
      </div>
        <div >
        <Question />
      </div>
        <div >
        <CategorySelect />
      </div>

    </>
  )
}

export default App;
