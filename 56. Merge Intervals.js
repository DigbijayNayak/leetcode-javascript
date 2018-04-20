/**
 * 56. Merge Intervals
 * 
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * Example 2:
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
	var len = intervals.length;
	var res = [];
	var a = null;
	var b = null;

	intervals.sort((c, d) => (c.start - d.start));

	for (var i = 0; i < len; i++) {
			a = res[res.length - 1];
			b = intervals[i];
			if (overlap(a, b)) {
					a.start = Math.min(a.start, b.start);
					a.end = Math.max(a.end, b.end);
			} else {
					res.push(new Interval(b.start, b.end));
			}
	}

	return res;
};

var overlap = function (a, b) {
	if (!a || !b) return false;
	if (b.start <= a.end && a.end <= b.end) return true;
	if (a.start <= b.end && b.end <= a.end) return true;
	return false;
};

// 先排序，后操作
// 也可以边操作边排序
