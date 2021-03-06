import * as React from 'react';
import { DetailsList, DetailsRow, IDetailsRowProps, IDetailsRowStyles } from 'office-ui-fabric-react/lib/DetailsList';
import { createListItems, IExampleItem } from 'office-ui-fabric-react/lib/utilities/exampleData';
import { getTheme } from 'office-ui-fabric-react/lib/Styling';

const theme = getTheme();

export class DetailsListCustomRowsExample extends React.Component<{}, {}> {
  private _items: IExampleItem[];

  constructor(props: {}) {
    super(props);
    this._items = createListItems(500);
  }

  public render() {
    return <DetailsList items={this._items} setKey="set" onRenderRow={this._onRenderRow} />;
  }

  private _onRenderRow = (props: IDetailsRowProps): JSX.Element => {
    const customStyles: Partial<IDetailsRowStyles> = {};
    if (props.itemIndex % 2 === 0) {
      // Every other row renders with a different background color
      customStyles.root = { backgroundColor: theme.palette.themeLighterAlt };
    }

    return <DetailsRow {...props} styles={customStyles} />;
  };
}
