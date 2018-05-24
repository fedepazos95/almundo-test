import React from 'react';
import Icon from './Icon';

const FiltersBox = () => {
    return (
        <div className="shadow-sm">
            <div className="filters-title">
                Filtros
            </div>
            <div className="filter" id="filters">
                <Icon name="search" size="18" /><label data-toggle="collapse" href="#collapseNombre" role="button" className="blue2"> Nombre del hotel</label>
                <div className="row collapse show mt-2 ml-2" id="collapseNombre">
                    <div className="col-lg-8 col-sm-8">
                        <input type="text" className="form-control" placeholder="Ingrese el nombre del hotel" />
                    </div>
                    <div className="col-lg-4 col-sm-4">
                        <button type="submit" className="btn btn-primary mb-2">Aceptar</button>
                    </div>
                </div>
            </div>
            <div className="filter" id="filters">
                <Icon name="star" size="18" /><label data-toggle="collapse" href="#collapseEstrellas" role="button" className="blue2"> Estrellas</label>
                <div className="row collapse" id="collapseEstrellas">
                    <div className="col-lg-12 col-sm-12">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="all-stars" />
                            <label className="custom-control-label" htmlFor="all-stars">Todas las estrellas</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="5-stars" />
                            <label className="custom-control-label" htmlFor="5-stars">
                                <Icon name="star" size="18" repeat="5" />
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="4-stars" />
                            <label className="custom-control-label" htmlFor="4-stars">
                                <Icon name="star" size="18" repeat="4" />
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="3-stars" />
                            <label className="custom-control-label" htmlFor="3-stars">
                                <Icon name="star" size="18" repeat="3" />
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="2-stars" />
                            <label className="custom-control-label" htmlFor="2-stars">
                                <Icon name="star" size="18" repeat="2" />
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="1-stars" />
                            <label className="custom-control-label" htmlFor="1-stars">
                                <Icon name="star" size="18" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FiltersBox;