// import Header from './components/header.jsx';   
// import Footer from './components/Footer.jsx';  
// import Food from './components/Food.jsx'; 
// function App() {
//     return (
//         <>
//         <Header />
//         <Footer />
//         <Food />
//         </>
//     );

// }
// import Card from './components/Card.jsx';
// function App() {
//     return (
//  <Card/>    

//     )
// }
// export default App

// import Button from './components/button.jsx';
// function App() {
//     return (
//         <div>
//             <h1>Welcome to My React App</h1>
//             <Button />
//         </div>
//     );
// }
// export default App; 


import Student from './components/student.jsx'; 
function App() {
    return (
        <>
        <Student name="John Doe" age={20} />
        <Student name="Jane Smith" age={22} isStudent={false} />
        <student name="Alice John" age={19} isStudent={true} />
        <student name="Bob Bro" age={21} isStudent={false} />  
        </>
    );
}
export default App;