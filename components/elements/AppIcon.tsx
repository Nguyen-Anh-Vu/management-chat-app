import React from 'react';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import InsightsIcon from '@mui/icons-material/Insights';
import FolderSharedIcon from '@mui/icons-material/FolderShared';

export const getIconByName = (iconName: string) => {
         
   switch (iconName) {
      case 'channel':
         return <MarkUnreadChatAltIcon/>
      case 'dashboard':
         return <InsightsIcon/>
      case 'profile':
         return <FolderSharedIcon/>
      default:
         return <React.Fragment/>
   }
         
}
//{getIconByName(menuItem.icon)}