"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(Header, { title: "React Todo App", subtitle: "This is a simple todo app that you can add or remove" }),
                React.createElement(TodoList, null)
            );
        }
    }]);

    return Main;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h3",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var TodoList = function (_React$Component3) {
    _inherits(TodoList, _React$Component3);

    function TodoList(props) {
        _classCallCheck(this, TodoList);

        var _this3 = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

        _this3.state = {
            option: ['One', 'Two', 'Three']
        };
        _this3.onSubmitForm = _this3.onSubmitForm.bind(_this3);
        _this3.handleRemove = _this3.handleRemove.bind(_this3);
        return _this3;
    }

    _createClass(TodoList, [{
        key: "onSubmitForm",
        value: function onSubmitForm(option) {
            var _this4 = this;

            if (!option) {
                return 'Please Enter a Valid Data';
            } else if (this.state.option.indexOf(option) > -1) {
                return 'Option is Already Exists';
            }
            this.setState(function () {
                _this4.state.option.push(option);
                //console.log(this.state.option);                        
            });
        }
    }, {
        key: "handleRemove",
        value: function handleRemove(itemID) {
            // console.log(itemID)
            // let data = this.state.option;
            var updatedOption = this.state.option.filter(function (value, index) {
                // console.log(itemID, value, index);

                return itemID !== index;
            });
            // console.log(updatedOption);

            this.setState({
                option: updatedOption
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            return React.createElement(
                "div",
                { className: "list-group" },
                this.state.option.map(function (value, id) {
                    return React.createElement(TodoItem, { itemID: id, key: id, item: value, handleRemove: _this5.handleRemove });
                }),
                React.createElement(TodoForm, { kbb: "hey", onSubmitForm: this.onSubmitForm })
            );
        }
    }]);

    return TodoList;
}(React.Component);

var TodoItem = function (_React$Component4) {
    _inherits(TodoItem, _React$Component4);

    function TodoItem(props) {
        _classCallCheck(this, TodoItem);

        var _this6 = _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this, props));

        _this6.handleRemove = _this6.handleRemove.bind(_this6);
        return _this6;
    }

    _createClass(TodoItem, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { className: "list-group-item" },
                this.props.item,
                React.createElement(
                    "span",
                    { onClick: this.handleEdit, className: "hover badge badge-danger" },
                    "Edit"
                ),
                React.createElement(
                    "span",
                    {
                        onClick: this.handleRemove,
                        className: "hover badge badge-danger" },
                    "X"
                )
            );
        }
    }, {
        key: "handleEdit",
        value: function handleEdit() {
            console.log("Edit Active");
        }
    }, {
        key: "handleRemove",
        value: function handleRemove() {
            this.props.handleRemove(this.props.itemID);
        }
    }]);

    return TodoItem;
}(React.Component);

var TodoForm = function (_React$Component5) {
    _inherits(TodoForm, _React$Component5);

    function TodoForm(props) {
        _classCallCheck(this, TodoForm);

        var _this7 = _possibleConstructorReturn(this, (TodoForm.__proto__ || Object.getPrototypeOf(TodoForm)).call(this, props));

        _this7.onSubmitForm = _this7.onSubmitForm.bind(_this7);
        _this7.state = {
            error: undefined
        };
        return _this7;
    }

    _createClass(TodoForm, [{
        key: "onSubmitForm",
        value: function onSubmitForm(e) {
            e.preventDefault();
            var option = e.target.elements.todoItem.value;
            var error = this.props.onSubmitForm(option);

            this.setState(function () {
                return { error: error };
            });

            // axios.post('http://localhost:3000/')
            // .then((res)=>{
            //     console.log(res);        
            // })
            // .catch((err) => {
            //    console.log(err)
            // })

            e.target.elements.todoItem.value = '';
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { method: "POST", action: "http://localhost:3000/", className: "form-inline", onSubmit: this.onSubmitForm },
                    React.createElement("input", { type: "text", name: "todoItem", className: "form-control mb-2" }),
                    React.createElement("input", { type: "submit", name: "submit", value: "Add Item", className: "btn btn-default mb-2" })
                )
            );
        }
    }]);

    return TodoForm;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('app'));
