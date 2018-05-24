import React from 'react';
import Icon from '../components/Icon';
import Checkbox from '../components/Checkbox';

const FiltersBox = ({state, handleFilterChange}) => {

        return (
            <div className="shadow-sm">
                <div className="filters-title">
                    Filtros
            </div>
                <div className="filter" id="filters">
                    <Icon name="search" size="18" /><label data-toggle="collapse" href="#collapseNombre" role="button" className="blue2"> Nombre del hotel</label>
                    <div className="row collapse show mt-2 ml-2" id="collapseNombre">
                        <div className="col-lg-11 col-sm-11">
                            <input name="name" type="text" className="form-control" placeholder="Ingrese el nombre del hotel" onChange={handleFilterChange} value={state.name} />
                        </div>
                    </div>
                </div>
                <div className="filter" id="filters">
                    <Icon name="star" size="18" /><label data-toggle="collapse" href="#collapseEstrellas" role="button" className="blue2"> Estrellas</label>
                    <div className="row collapse" id="collapseEstrellas">
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