import {foo,bar,print} from './math';
import '../css/style.css';
print();
document.write("webpack is working" + '<br />');
document.write(foo(3) + '<br />');
document.write(bar(3) + '<br />');