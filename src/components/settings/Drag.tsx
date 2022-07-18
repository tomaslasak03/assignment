import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { tableOrderCheck } from '@store';
import Item from './Item';
import { SettingsItemContainerS } from './style';

const Drag: React.FC = () => {
  const { order, setOrder } = tableOrderCheck((s) => s);

  return (
    <DragDropContext
      onDragEnd={(e) => {
        if (typeof e.destination !== 'undefined') {
          setOrder(e.source.index, e.destination.index);
        }
      }}
    >
      <Droppable droppableId='settings_items'>
        {(provided) => (
          <SettingsItemContainerS {...provided.droppableProps} ref={provided.innerRef}>
            {order.map((item: any, _id: number) => (
              <Draggable key={item.title} draggableId={item.title} index={_id}>
                {(provided) => (
                  <Item
                    properties={{
                      ...provided.draggableProps,
                      ...provided.dragHandleProps,
                    }}
                    innerRef={provided.innerRef}
                    title={item.title}
                    id={_id}
                    checked={item.check}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </SettingsItemContainerS>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Drag;
