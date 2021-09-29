/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/26-16:44
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React, { PureComponent } from 'react';
import { Refresh } from 'rmdi';
import { Button, Spin } from 'antd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import AddWidgets from './AddWidgets';
import DashboardBloc from '@/pages/dashboard/model/DashboardBloc';
import BlocBuilder from 'bloc-builder-react';
import DashboardWidget from './components/DashboardWidget';
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  // change background colour if dragging
  // border: isDragging ? 'dashed 1px grey' : 'solid 1px transparent',

  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  // background: isDraggingOver ? 'lightblue' : 'transparent',
  margin: 0,
  border: 'none',
});

/*
 *
 * Dashboard Page
 * This page is dashboard admin panel of system
 * and has any type of widget that dynamically position and layout
 *
 * */
export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.bloc = new DashboardBloc();
    this.bloc.getMyDashboard();
  }

  /*
   *
   * When any of widget drag end this function called
   * @param result
   *
   * */
  onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    this.bloc.dragEndWidget(result);
    this.forceUpdate();
    return;
  }

  /*
   * Render draggable Widget of Dashboard
   * @param item : data model of my widget [DashboardRepository.myWidget]
   * @param index : index of widget
   *
   * @return [Draggable] component
   * */
  renderDraggable(item, index, data) {
    console.log('item.id ====> ', item.id);
    return (
      <Draggable draggableId={item.id.toString()} index={item.id}>
        {(provided, snapshot) => (
          <div>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
            >
              <span {...provided.dragHandleProps}>
                <DashboardWidget model={item} />
              </span>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }

  get widgets() {
    return this.bloc.repo.widgets;
  }
  filterWidgetByCol(col, data) {
    // eslint-disable-next-line eqeqeq
    data.myWidgets.forEach((item) => {
      item.widget = this.bloc.getWidgetById(item.id);
    });
    return Array.from(data.myWidgets.filter((item) => item.col == col));
  }

  render() {
    return (
      /*
داشبورد کل ویدگت با درگ اند دروپ
*/
      <section>
        <div className="flex flex-col">
          {/* --------------------------------- HEADER ---------------------------------*/}
          <div className="flex items-center mb-4">
            <div className="flex flex-col flex-1">
              <span className="text-3xl font-all	font-extrabold">داشبرد</span>
              <div className="md:flex hidden">
                <b className="ml-2 font-all">حسین عزیز،</b>
                <span className="font-all">به پنل 360 خوش آمدید</span>
              </div>
            </div>
            <AddWidgets />
            <Button
              className="w-12 font-all px-2 mr-4 "
              icon={<Refresh className="text-green-500 flex items-center" />}
            />
          </div>
          {/* --------------------------------- END HEADER ---------------------------------*/}

          {/* --------------------------------- DROP CONTEXT START ---------------------------------*/}
          <BlocBuilder
            subject={this.bloc.subject}
            builder={({ error, data }) => {
              if (error) return <div>Error</div>;
              if (!data) return <Spin spinning={true}></Spin>;
              return (
                <DragDropContext onDragEnd={this.onDragEnd}>
                  <div>
                    <div className="flex justify-between">
                      {/* --------------------------------- RENDER WIDGET ---------------------------------*/}
                      {[1, 2, 3, 4].map((col, ind) => {
                        return (
                          <Droppable
                            droppableId={col.toString()}
                            type="droppableItem"
                            key={col.toString()}
                          >
                            {(provided, snapshot) => (
                              <div
                                key={col.toString()}
                                ref={provided.innerRef}
                                className="md:w-1/4 md:ml-6"
                                style={getListStyle(snapshot.isDraggingOver)}
                              >
                                {this.filterWidgetByCol(col, data).map((item, index) =>
                                  this.renderDraggable(item, index, data),
                                )}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        );
                      })}
                      {/* --------------------------------- END RENDER WIDGET ---------------------------------*/}
                    </div>
                  </div>
                </DragDropContext>
              );
            }}
          />
          {/* --------------------------------- END DROP CONTEXT ---------------------------------*/}
        </div>
      </section>
    );
  }

  getWidgetDataById(data, id) {
    return data.widgets.find((item) => item.id == id);
  }
}
