import { IRemind } from '../../../models/reminds/IReminds';

type actionsType = 'update' | 'delete';

export const updatedReminds = (
  actionType: actionsType,
  reminds: Array<IRemind>,
  actionItem: IRemind,
): Array<IRemind> | [] => {
  if (!reminds.length && !actionItem) return [];
  const pos = reminds.findIndex(remind => remind._id === actionItem._id);
  switch (actionType) {
    case 'update':
      reminds[pos] = actionItem;
      return [...reminds];
    case 'delete':
      return reminds.filter(remind => remind._id !== actionItem._id);
    default:
      return reminds;
  }
};
