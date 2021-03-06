export const ENABLE_SELECTING = 'ENABLE_SELECTING';
export const DISABLE_SELECTING = 'DISABLE_SELECTING';

export const SELECT_MULTIPLE = 'SELECT_MULTIPLE';
export const REMOVE_MULTIPLE = 'REMOVE_MULTIPLE';
export const SELECTING_STARTED = 'SELECTING_STARTED';
export const SELECT_CANCELLED = 'SELECT_CANCELLED';
export const SELECTING_ENDED = 'SELECTING_ENDED';

export const enableSelecting = () => ({ type: ENABLE_SELECTING });
export const disableSelecting = () => ({ type: DISABLE_SELECTING });

export const selectMultiple = (onSelect) => ({ type: SELECT_MULTIPLE, onSelect });
export const removeMultiple = (onRemove) => ({ type: REMOVE_MULTIPLE, onRemove });
export const cancelSelection = () => ({ type: SELECT_CANCELLED });

export const selectionStarted = () => ({ type: SELECTING_STARTED });
export const selectionEnded = () => ({ type: SELECTING_ENDED });
