import React from "react";
import IconButton from "../template/iconButton";

export default function TodoForm({ handleAdd, description, handleChange, handleSearch, handleClear }) {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? handleSearch() : handleAdd()
        } else if (e.key === 'Escape') {
            handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">
            <div className="col-xs-12 col-sm-9 col-md-10">
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={description}
                    onChange={handleChange}
                    onKeyUp={keyHandler}
                />
            </div>

            <div className="col-xs-12 col-sm-3 col-md-2">
                <IconButton style='primary' icon='plus'
                    onClick={handleAdd}></IconButton>
                <IconButton style='info' icon='search'
                    onClick={handleSearch}></IconButton>
                <IconButton style='default' icon='close'
                    onClick={handleClear}></IconButton>
            </div>
        </div>
    )
}