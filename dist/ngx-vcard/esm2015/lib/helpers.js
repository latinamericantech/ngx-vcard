/**
 * Encodes string
 */
export function e(value) {
    if (value) {
        if (typeof value !== 'string') {
            value = '' + value;
        }
        return value
            .replace(/\n/g, '\n')
            .replace(/,/g, ',')
            .replace(/;/g, ';');
    }
    return '';
}
/**
 * Return new line characters
 */
export function nl() {
    return '\n';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9TdGVwaGFuaWUvRG9jdW1lbnRzL25neC12Y2FyZC9wcm9qZWN0cy9uZ3gtdmNhcmQvc3JjLyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLFVBQVUsQ0FBQyxDQUFDLEtBQXlCO0lBQ3pDLElBQUksS0FBSyxFQUFFO1FBQ1QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7U0FDcEI7UUFDRCxPQUFPLEtBQUs7YUFDVCxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzthQUNwQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNsQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsRUFBRTtJQUNoQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRW5jb2RlcyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcbicpXHJcbiAgICAgIC5yZXBsYWNlKC8sL2csICcsJylcclxuICAgICAgLnJlcGxhY2UoLzsvZywgJzsnKTtcclxuICB9XHJcbiAgcmV0dXJuICcnO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJuIG5ldyBsaW5lIGNoYXJhY3RlcnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBubCgpOiBzdHJpbmcge1xyXG4gIHJldHVybiAnXFxuJztcclxufVxyXG4iXX0=