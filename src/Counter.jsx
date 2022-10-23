import styled from 'styled-components';
const Counter = ({count, increase, decrement, reset }) => {
    return (
        <>
            <Container>
                <Title>React Counter</Title>
                <Display>The count is {count}</Display> 
                <Buttons>
                    <button onClick={increase}>Increase</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>Reset</button> 
                </Buttons>  
            </Container>
        </>
    )
}

export default Counter;

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

})

const Title = styled.h1({
    margin: '1rem'
})

const Display = styled.p({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    margin: '1rem',
    width: '300px',
    height: '50px',
    backgroundColor: 'lightblue'

})
const Buttons = styled.div({
    display: 'flex',
    flexDirection: 'column'
})


