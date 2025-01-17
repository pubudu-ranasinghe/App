import _ from 'underscore';
import Onyx from 'react-native-onyx';
import ONYXKEYS from '../../ONYXKEYS';
import updateUnread from './updateUnread/index';
import * as ReportUtils from '../ReportUtils';
import CONST from '../../CONST';

Onyx.connect({
    key: ONYXKEYS.COLLECTION.REPORT,
    waitForCollectionCallback: true,
    callback: (reportsFromOnyx) => {
        const unreadReports = _.filter(reportsFromOnyx, (report) => ReportUtils.isUnread(report) && report.notificationPreference !== CONST.REPORT.NOTIFICATION_PREFERENCE.HIDDEN);
        updateUnread(_.size(unreadReports));
    },
});
