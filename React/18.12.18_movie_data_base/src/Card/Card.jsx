import React from 'react';
import { Divider, Header, Icon, Table } from 'semantic-ui-react'
import './Card.css'

const Cards = ({title, actors, budget, description, genres, year, func, id}) => {
    return (
        <div className='card'>     
        <p data-id={id} className='del' onClick={func}>X</p>
            <React.Fragment>
                <Divider horizontal>
                    <Header as='h3'>
                        <Icon name='film'/>
                     {title}
                    </Header>
                </Divider>
        
                <p className="about">
                   {description}
                </p>
        
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='info' />
                    Film Info
                </Header>
            </Divider>
        
            <Table definition className='table'>
                <Table.Body>
                    <Table.Row>
                    <Table.Cell width={2}>Actors</Table.Cell>
                    <Table.Cell>{actors.map(el => <span key={el}>{el}, </span>)}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>Budget</Table.Cell>
                    <Table.Cell>{budget}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>Genres</Table.Cell>
                    <Table.Cell>{genres.map(el=><span key={el}>{el}, </span>)}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>Year</Table.Cell>
                    <Table.Cell>{year}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

        </React.Fragment> 
        </div>
    );
};

export default Cards;
