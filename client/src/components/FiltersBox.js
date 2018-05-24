import React from 'react';
import Icon from '../components/Icon';
import Checkbox from '../components/Checkbox';

const FiltersBox = ({ state, handleFilterChange, handleNameChange, submitName }) => {
    return (
        <div className="shadow-sm" id="filtersBox">
            <div className="title">Filtros</div>
            <div className="box">
                <Icon name="search" size="18" /><label data-toggle="collapse" href="#collapseNombre" role="button"> Nombre del hotel</label>
                <form className="collapse show mt-2 ml-2 form-inline" id="collapseNombre" onSubmit={submitName}>
                    <input name="name" type="text" className="form-control" placeholder="Ingrese el nombre del hotel" onChange={handleNameChange} value={state.name} />
                    <button type="submit" className="btn btn-primary ml-2">Aceptar</button>
                </form>
            </div>
            <div className="box">
                <Icon name="star" size="18" /><label data-toggle="collapse" href="#collapseEstrellas" role="button"> Estrellas</label>
                <div className="collapse" id="collapseEstrellas">
                    <div className="col-lg-12 col-sm-12">
                        <Checkbox name="stars" id="all" handleChange={handleFilterChange} checked={(state.stars === "all")} content="Todas las estrellas" />
                        <Checkbox name="stars" id="5" handleChange={handleFilterChange} checked={(state.stars === "5")} content={<Icon name="star" size="18" repeat="5" />} />
                        <Checkbox name="stars" id="4" handleChange={handleFilterChange} checked={(state.stars === "4")} content={<Icon name="star" size="18" repeat="4" />} />
                        <Checkbox name="stars" id="3" handleChange={handleFilterChange} checked={(state.stars === "3")} content={<Icon name="star" size="18" repeat="3" />} />
                        <Checkbox name="stars" id="2" handleChange={handleFilterChange} checked={(state.stars === "2")} content={<Icon name="star" size="18" repeat="2" />} />
                        <Checkbox name="stars" id="1" handleChange={handleFilterChange} checked={(state.stars === "1")} content={<Icon name="star" size="18" />} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FiltersBox;