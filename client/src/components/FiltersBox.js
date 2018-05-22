import React from 'react';

// Assets
import search from '../assets/icons/filters/search.svg';
import star from '../assets/icons/filters/star.svg';

const FiltersBox = () => {
    return (
        <div>
            <div className="filters-title">
                Filtros
            </div>
            <div className="filter" id="filters">
                <object type="image/svg+xml" data={search} className="icon-filter">Search</object> <label data-toggle="collapse" href="#collapseNombre" role="button" className="blue2">Nombre del hotel</label>
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
                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label data-toggle="collapse" href="#collapseEstrellas" role="button" className="blue2">Estrellas</label>
                <div className="row collapse" id="collapseEstrellas">
                    <div className="col-lg-12 col-sm-12">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="all-stars"/>
                            <label className="custom-control-label" htmlFor="all-stars">Todas las estrellas</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="5-stars"/>
                            <label className="custom-control-label" htmlFor="5-stars">
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="4-stars"/>
                            <label className="custom-control-label" htmlFor="4-stars">
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="3-stars"/>
                            <label className="custom-control-label" htmlFor="3-stars">
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="2-stars"/>
                            <label className="custom-control-label" htmlFor="2-stars">
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="1-stars"/>
                            <label className="custom-control-label" htmlFor="1-stars">
                                <object type="image/svg+xml" data={star} className="icon-filter">Star</object> <label className="blue2"></label>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiltersBox;